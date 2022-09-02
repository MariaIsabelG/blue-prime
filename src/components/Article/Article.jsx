import { useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';



function ArticleOne() {
    const { id } = useParams();
    console.log('This Article ID is:', id);

    const articles = useSelector((store) => store.article)


    return (
        <>


            <div className="flex flex-wrap items-center justify-center">
                <div className='mb-10 mt-10'>
                    <div>
                        <h1>{articles.title}</h1>
                    </div>
                    <div className='mb-10 mt-10'>
                        <img className=" h-48 w-48" src={articles.image} />
                    </div>
                    <div>
                        {articles.content}
                    </div>
                </div>
            </div>



        </>
    )
}

export default ArticleOne;