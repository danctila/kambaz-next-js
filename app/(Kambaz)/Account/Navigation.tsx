import Link from "next/link";

export default function AccountNavigation() {
  return (
    <div id="wd-account-navigation" className="wd list-group fs-5 rounded-0">
      <Link
        href="/Account/Signin"
        id="wd-account-signin-link"
        className="list-group-item border-0 text-danger"
      >
        Signin
      </Link>
      <Link
        href="/Account/Signup"
        id="wd-account-signup-link"
        className="list-group-item border-0 text-danger"
      >
        Signup
      </Link>
      <Link
        href="/Account/Profile"
        id="wd-account-profile-link"
        className="list-group-item border-0 text-danger"
      >
        Profile
      </Link>
    </div>
  );
}
