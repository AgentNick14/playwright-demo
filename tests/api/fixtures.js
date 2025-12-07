import { test as base } from '@playwright/test';

export const test = base.extend({
  authToken: async ({ request }, use) => {
    const response = await request.post('https://restful-booker.herokuapp.com/auth', {
      data: {
        username: "admin",
        password: "password123"
      }
    });

    const body = await response.json();
    await use(body.token);
  },

  api: async ({ request, authToken }, use) => {
    // context wrapper to include token automatically
    const api = {
      createBooking: async (payload) => {
        return await request.post('https://restful-booker.herokuapp.com/booking', {
          data: payload,
          headers: { 'Content-Type': 'application/json' }
        });
      },

      getBooking: async (id) => {
        return await request.get(`https://restful-booker.herokuapp.com/booking/${id}`);
      },

      updateBooking: async (id, payload) => {
        return await request.put(`https://restful-booker.herokuapp.com/booking/${id}`, {
          data: payload,
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Cookie': `token=${authToken}`
          }
        });
      },

      deleteBooking: async (id) => {
        return await request.delete(`https://restful-booker.herokuapp.com/booking/${id}`, {
          headers: {
            'Cookie': `token=${authToken}`
          }
        });
      }
    };

    await use(api);
  }
});

export const expect = base.expect;
