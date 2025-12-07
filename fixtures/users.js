// array of user credentials applicable to the site
const users = [
  { username: 'standard_user', password: 'secret_sauce', shouldLogin: true },
  { username: 'locked_out_user', password: 'secret_sauce', shouldLogin: false },
  { username: 'problem_user', password: 'secret_sauce', shouldLogin: true },
  { username: 'performance_glitch_user', password: 'secret_sauce', shouldLogin: true },
  { username: 'error_user', password: 'secret_sauce', shouldLogin: true },
  { username: 'visual_user', password: 'secret_sauce', shouldLogin: true }
];

module.exports = users;