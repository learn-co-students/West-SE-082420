# SWBAT
- Understand, theoretically, how authentication and authorization work
    - Understand the difference between authentication and authorization and how they fit under the umbrella topic auth
- Discuss different encryption and hashing schemes, and bcrypt specifically
    - Do we want to ever store plaintext user passwords? (no)
- Augment a user model in rails using bcrypt, password_digest, and has_secure_password
- Build User sign up and sign in flows in Rails
- Review sessions and cookies, as well as implement sign up, log in, and log out

# Install:
[Cookie Remover](https://chrome.google.com/webstore/detail/cookie-remover/kcgpggonjhmeaejebeoeomdlohicfhce?hl=en)

# Rainbow Tables
A rainbow table is a database that is used to gain authentication by cracking the password hash. It is a precomputed dictionary of plaintext passwords and their corresponding hash values that can be used to find out what plaintext password produces a particular hash. Since more than one text can produce the same hash, it’s not important to know what the original password really was, as long as it produces the same hash.
- [geeks4geeks](https://www.geeksforgeeks.org/understanding-rainbow-table-attack/)

- [Why do you need to Salt and Hash Passwords?](https://culttt.com/2013/01/21/why-do-you-need-to-salt-and-hash-passwords/#:~:text=%E2%80%9CHashing%E2%80%9D%20passwords%20is%20the%20common%20approach%20to%20storing%20passwords%20securely.&text=Hashing%20a%20password%20is%20good,for%20a%20human%20to%20read.)
