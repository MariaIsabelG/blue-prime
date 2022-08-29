import React from 'react';
import { useHistory } from 'react-router-dom';

//component
// import ArticleOne from '../ArticleOne/ArticleOne';
// import ArticleTwo from '../ArticleTwo/ArticleTwo';
// import ArticleThree from '../ArticleThree/ArticleThree';
// import ArticleFour from '../ArticleFour/ArticleFour';
// import ArticleFive from '../ArticleFive/ArticleFive';
// import ArticleSix from '../ArticleSix/ArticleSix';


function ResourcesPage() {
  const history = useHistory();

  return (
    <div className="container">
      <h1>Categories</h1>

      <section>
        <div className="max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
          <div
            className="grid grid-cols-1 lg:grid-cols-2 gap-y-8 lg:gap-x-16 lg:items-center"
          >
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
              <a
                className="block p-4 border border-gray-100 shadow-sm rounded-xl focus:outline-none focus:ring hover:border-gray-200 hover:ring-1 hover:ring-gray-200"
                onClick={()=>history.push('/1')}
              >

                <h6 className="mt-2 font-bold">Article One</h6>

                <p className="hidden sm:mt-1 sm:text-sm sm:text-gray-600 sm:block">
                  {/* <ArticleOne /> */}
                  Lorem ipsum dolor sit amet consectetur.
                </p>
              </a>

              <a
                className="block p-4 border border-gray-100 shadow-sm rounded-xl focus:outline-none focus:ring hover:border-gray-200 hover:ring-1 hover:ring-gray-200"
                onClick={()=>history.push('/2')}
              >

                <h6 className="mt-2 font-bold">Article Two</h6>

                <p className="hidden sm:mt-1 sm:text-sm sm:text-gray-600 sm:block">
                  {/* <ArticleTwo /> */}
                  Lorem ipsum dolor sit amet consectetur.
                </p>
              </a>

              <a
                className="block p-4 border border-gray-100 shadow-sm rounded-xl focus:outline-none focus:ring hover:border-gray-200 hover:ring-1 hover:ring-gray-200"
                onClick={()=>history.push('/3')}
              >

                <h6 className="mt-2 font-bold">Article Three</h6>

                <p className="hidden sm:mt-1 sm:text-sm sm:text-gray-600 sm:block">
                  {/* <ArticleThree /> */}
                  Lorem ipsum dolor sit amet consectetur.
                </p>
              </a>

              <a
                className="block p-4 border border-gray-100 shadow-sm rounded-xl focus:outline-none focus:ring hover:border-gray-200 hover:ring-1 hover:ring-gray-200"
                onClick={()=>history.push('/4')}
              >

                <h6 className="mt-2 font-bold">Article Four</h6>

                <p className="hidden sm:mt-1 sm:text-sm sm:text-gray-600 sm:block">
                  {/* <ArticleFour /> */}
                  Lorem ipsum dolor sit amet consectetur.
                </p>
              </a>

              <a
                className="block p-4 border border-gray-100 shadow-sm rounded-xl focus:outline-none focus:ring hover:border-gray-200 hover:ring-1 hover:ring-gray-200"
                onClick={()=>history.push('/5')}
              >

                <h6 className="mt-2 font-bold">Article Five</h6>

                <p className="hidden sm:mt-1 sm:text-sm sm:text-gray-600 sm:block">
                  {/* <ArticleFive /> */}
                  Lorem ipsum dolor sit amet consectetur.
                </p>
              </a>

              <a
                className="block p-4 border border-gray-100 shadow-sm rounded-xl focus:outline-none focus:ring hover:border-gray-200 hover:ring-1 hover:ring-gray-200"
                onClick={()=>history.push('/6')}
              >

                <h6 className="mt-2 font-bold">Article Six</h6>

                <p className="hidden sm:mt-1 sm:text-sm sm:text-gray-600 sm:block">
                  {/* <ArticleSix /> */}
                  Lorem ipsum dolor sit amet consectetur.
                </p>
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

export default ResourcesPage;
