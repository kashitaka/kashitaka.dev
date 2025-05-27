const Profile = () => {
  return (
    <div className="flex flex-col items-center w-full">
      <div className="flex items-center justify-left w-full">
        <img className="w-16 h-16 rounded-full border mr-4 border-neutral-200 dark:border-neutral-700"
        src="/assets/blog/profile/IJy6aSXU_400x400.jpg"
        alt="kashitaka" />
        <div className="ml-2 text-lg font-semibold">kashitaka</div>
      </div>
      <div className="mt-4 w-full flex justify-left">
          <p className="text-sm text-gray-600 dark:text-gray-400 max-w-xs">
            A cybernetic duck v3.0 / Software Engineer @ XICA / ex-Recruit / duck fanatic
          </p>
        </div>
    </div>
  );
};

export default Profile;
