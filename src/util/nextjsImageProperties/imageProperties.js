const imageCommonProps = {
  width: 0,
  height: 0,
  alt: "",
};

// location: components/SignUp/SignUpForm
// location: components/SignIn/SignInForm
export const logoProperty = {
  ...imageCommonProps,
  id: "logo",
  src: "/images/logo.svg",
};

// location: components/SignUp/welcome
const commonEllipseImageProperty = {
  ...imageCommonProps,
  src: "/images/Ellipse-11.svg",
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
  alt: "",
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

const socialLinkerImageCommonProperty = {
  height: 30,
  width: 30,
  alt: "",
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

// location: components/TopNav/TopNavLeft

export const topNavLeftCalender = {
  ...imageCommonProps,
  src: "/images/basic-calendar-icon.svg",
  className: "tn-left-icon",
};

export const topNavLeftMail = {
  ...imageCommonProps,
  src: "/images/mail-icon.svg",
  className: "tn-left-icon",
};

export const topNavLeftUser = {
  ...imageCommonProps,
  src: "/images/Users-icon.svg",
  className: "tn-left-icon",
};

export const topNavLeftPlus = {
  ...imageCommonProps,
  src: "/images/Minus_M-icon.svg",
  className: "tn-left-icon",
};

// location: components/TopNav/TopNavRight

export const topNavRightLanguage = {
  ...imageCommonProps,
  src: "/images/language-icon.svg",
  className: "tn-right-icon",
};

export const topNavRightScreenExpand = {
  ...imageCommonProps,
  src: "/images/Screen_Expand-icon.svg",
  className: "tn-right-icon",
};

export const topNavRightSearch = {
  ...imageCommonProps,
  src: "/images/Search-icon.svg",
  className: "tn-right-icon",
};

export const topNavRightCalender = {
  ...imageCommonProps,
  src: "/images/basic-calendar-icon.svg",
  className: "tn-right-icon",
};

export const topNavRightBookmark = {
  ...imageCommonProps,
  src: "/images/Bookmark-icon.svg",
  className: "tn-right-icon",
};

export const topNavRightBell = {
  ...imageCommonProps,
  src: "/images/Bell_Ring-icon.svg",
  className: "tn-right-icon",
};
