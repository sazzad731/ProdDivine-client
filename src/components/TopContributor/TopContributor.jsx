import React from 'react';

const TopContributor = () => {
  return (
    <div className=" mb-20">
      <h1 className="text-3xl font-bold tracking-tight text-[var(--text-primary)] sm:text-4xl">
        Top Contributors
      </h1>
      <p className="mt-3 text-lg text-[var(--text-secondary)]">
        Meet the amazing people who make our community thrive.
      </p>
      <div className="mt-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 overflow-x-auto pb-8">
          <div className="w-full text-center bg-secondary/20 rounded-lg p-6">
            <div className="relative mx-auto h-28 w-28">
              <img
                alt="Ethan Carter profile picture"
                className="h-full w-full rounded-full object-cover"
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
            </div>
            <div className="mt-4">
              <h3 className="text-lg font-bold text-[var(--text-primary)]">
                Ethan Carter
              </h3>
              <p className="mt-1 text-sm text-[var(--text-secondary)]">
                Authored 50+ articles and tutorials.
              </p>
            </div>
          </div>

          <div className="w-full text-center bg-secondary/20 rounded-lg p-6">
            <div className="relative mx-auto h-28 w-28">
              <img
                alt="Sophia Bennett profile picture"
                className="h-full w-full rounded-full object-cover"
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
            </div>
            <div className="mt-4">
              <h3 className="text-lg font-bold text-[var(--text-primary)]">
                Sophia Bennett
              </h3>
              <p className="mt-1 text-sm text-[var(--text-secondary)]">
                Lead maintainer for our open-source library.
              </p>
            </div>
          </div>

          <div className="w-full text-center bg-secondary/20 rounded-lg p-6">
            <div className="relative mx-auto h-28 w-28">
              <img
                alt="Liam Harper profile picture"
                className="h-full w-full rounded-full object-cover"
                src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
            </div>
            <div className="mt-4">
              <h3 className="text-lg font-bold text-[var(--text-primary)]">
                Liam Harper
              </h3>
              <p className="mt-1 text-sm text-[var(--text-secondary)]">
                Organized 10+ community events.
              </p>
            </div>
          </div>

          <div className="w-full text-center bg-secondary/20 rounded-lg p-6">
            <div className="relative mx-auto h-28 w-28">
              <img
                alt="Olivia Hayes profile picture"
                className="h-full w-full rounded-full object-cover"
                src="https://images.unsplash.com/photo-1463453091185-61582044d556?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
            </div>
            <div className="mt-4">
              <h3 className="text-lg font-bold text-[var(--text-primary)]">
                Olivia Hayes
              </h3>
              <p className="mt-1 text-sm text-[var(--text-secondary)]">
                Top problem solver on the forums.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopContributor;