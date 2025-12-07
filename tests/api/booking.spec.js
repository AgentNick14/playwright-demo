import { test, expect } from './fixtures';

const bookingPayload = {
  firstname: "Nicholas",
  lastname: "Naicker",
  totalprice: 200,
  depositpaid: true,
  bookingdates: {
    checkin: "2024-01-01",
    checkout: "2024-01-05"
  },
  additionalneeds: "Automation"
};

test.describe('Booking API CRUD Operations', () => {
  let bookingId;

  test('Create Booking', async ({ api }) => {
    const createRes = await api.createBooking(bookingPayload);
    const body = await createRes.json();
    

    console.log("CREATE RESPONSE:", JSON.stringify(body, null, 2));

    expect(createRes.ok()).toBeTruthy();
    bookingId = body.bookingid;

    expect(body.booking.firstname).toBe(bookingPayload.firstname);
    expect(typeof bookingId).toBe("number");
  });

  test('Get Booking', async ({ api }) => {
    const getRes = await api.getBooking(bookingId);
    const body = await getRes.json();
    
    console.log("GET RESPONSE:", JSON.stringify(body, null, 2));


    expect(getRes.status()).toBe(200);
    expect(body.lastname).toBe(bookingPayload.lastname);
  });

  test('Update Booking', async ({ api }) => {
    const updatedPayload = {
      ...bookingPayload,
      firstname: "Nick",
      totalprice: 300
    };

    const updateRes = await api.updateBooking(bookingId, updatedPayload);
    const body = await updateRes.json();
    
    console.log("UPDATE RESPONSE:", JSON.stringify(body, null, 2));

    expect(updateRes.ok()).toBeTruthy();

    expect(body.firstname).toBe("Nick");
    expect(body.totalprice).toBe(300);
  });

  test('Delete Booking', async ({ api }) => {
    const deleteRes = await api.deleteBooking(bookingId);

    console.log("DELETE RESPONSE STATUS:", deleteRes.status());

    expect(deleteRes.status()).toBe(201);
    

    // Verify it’s really gone
    const verifyRes = await api.getBooking(bookingId);

    console.log("VERIFY DELETED RESPONSE:", verifyRes.status());

    expect(verifyRes.status()).toBe(404);
  });
});
