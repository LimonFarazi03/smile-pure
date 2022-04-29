import React from "react";

const Blog = () => {
  return (
    <div className="my-5">
      <div className="container px-4">
        <div className="row gx-5">
          <div className="col-12 col-md-4 mt-4">
            <div className="p-4 border bg-light rounded-5">
              <h1 className="fs-3 mb-2 text-center">
                What is the difference between Authentication and Authorization?
              </h1>
              <p>
                Authentication is the process of identifying users and
                validating who they claim to be. One of the most common and
                obvious factors to authenticate identity is a password. If the
                user name matches the password credential, it means the identity
                is valid, and the system grants access to the user.
                Authorization happens after a user’s identity has been
                successfully authenticated. It is about offering full or partial
                access rights to resources like database, funds, and other
                critical information to get the job done.
              </p>
            </div>
          </div>
          <div className="col-12 col-md-4 mt-4">
            <div className="p-4 border bg-light rounded-5">
              <h1 className="fs-3 mb-2 text-center">
                What other services does firebase provide other than
                authentication?
              </h1>
              <p>
                There are so many services firebase provide other than
                authentication. Here are some of them-
              </p>
              <ul>
                <li>Cloud Firestore</li>
                <li>Cloud Functions</li>
                <li>Hosting</li>
                <li>Cloud Storage</li>
                <li>Google analytics</li>
                <li>Predictions</li>
                <li>Cloud Messaging</li>
              </ul>
            </div>
          </div>
          <div className="col-12 col-md-4 mt-4">
            <div className="p-4 border bg-light rounded-5">
              <h1 className="fs-3 mb-2 text-center">
                Why are you using firebase? What other options do you have to
                implement authentication?
              </h1>
              <p>
                I do use firebase for implementing authentication system in the
                application. Firebase is a service of google. Since,
                authentication means the transaction of very important data like
                email, phone, password, credit card info, so i chose google to
                handle these. There are so many alternatives of firebase to
                implement authentication. Some of them are Auth0, Passport,
                Okta, Keycloak etc.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
