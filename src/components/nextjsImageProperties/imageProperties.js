// location: components/SignUp/SignUpForm
export const signUpLogoProperty = {
  src: "/images/logo.svg",
  height: 66,
  width: 66,
  alt: "logo",
  className: "lg:mb-[20px]",
};

// location: components/SignUp/welcome
const commonEllipseImageProperty = {
  src: "/images/Ellipse-11.svg",
  height: 0,
  width: 0,
  alt: "logo",
  className: "image",
};

export const bgEllipse1 = {
  id: "bg-ellipse-1",
  ...commonEllipseImageProperty,
};
export const bgEllipse2 = {
  id: "bg-ellipse-2",
  ...commonEllipseImageProperty,
};

const commonWelcomeUsersImageProperty = {
  height: 32,
  width: 32,
  className: "image",
};

export const user1 = {
  id: "user-1",
  src: "/images/user.png",
  ...commonWelcomeUsersImageProperty,
};
export const user2 = {
  id: "user-2",
  src: "/images/user-4.png",
  ...commonWelcomeUsersImageProperty,
};
export const user3 = {
  id: "user-3",
  src: "/images/user-2.png",
  ...commonWelcomeUsersImageProperty,
};
export const user4 = {
  id: "user-4",
  src: "/images/user-3.png",
  ...commonWelcomeUsersImageProperty,
};

// location: components/SignIn/SignInForm

export const signInLogoProperty = {
  src: "/images/logo.svg",
  height: 66,
  width: 66,
  alt: "logo",
};

const socialLinkerImageCommonProperty = {
  height: 30,
  width: 30,
  alt: "logo",
};

export const facebookLinkerImage = {
  src: "/images/facebook.svg",
  ...socialLinkerImageCommonProperty,
};
export const twitterLinkerImage = {
  src: "/images/twitter.svg",
  ...socialLinkerImageCommonProperty,
};
export const googleLinkerImage = {
  src: "/images/google.svg",
  ...socialLinkerImageCommonProperty,
};
