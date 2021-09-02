# Mini Project - Student Management

react-router-dom
@types/react-router-dom

#

/login:
/admin: layout

/admin/\*
feature: /admin/dashboard
feature: /admin/students

auth / authentication

- login
- sign up / register
- forgot password

CLICK LOGIN

- Call API to login
- Success -> redirect ADMIN
- Failed -> Show ERROR

authSaga
LOOP

- if logged in, watch LOGOUT
- else watch LOGIN

LOGIN

- Call login API to get token + user info
- set token to localStorage
- redirect to admin page

LOGOUT

- clear token from localStorage
- redirect to login page
