import { useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';



function ArticleOne() {
    const { id } = useParams();
    console.log('This Article ID is:', id);

    const articles = useSelector((store) => store.article)


    return (
        <>


            <div className="">
                <div className='mb-10 mt-10 flex flex-col items-center justify-center'>
                    <div>
                        <span className="text-2xl font-bold">{articles.title}</span>
                    </div>
                    <div className='mb-10 mt-10'>
                        <img className=" h-48 w-48 " src={articles.image} />
                    </div>
                    <div className="ml-20 mr-20">
                        {articles.content}
                    </div>
                </div>
            </div>



        </>
    )
}

export default ArticleOne;