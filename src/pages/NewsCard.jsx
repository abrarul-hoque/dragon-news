import defaultUserPic from '../assets/user.png';
import newsImage from '../assets/editorsInsight1.png';
import { Link } from 'react-router-dom';

const NewsCard = ({ singleNews }) => {
    const { title, author, image_url, details, rating, total_view } = singleNews;
    return (
        <div className='space-y-4 mt-5'>
            {/* author info */}
            <div className='flex items-center bg-gray-200 p-2 rounded-xl'>
                {/* <img src={author.img} alt="" /> */}
                <img className='w-6 mr-4' src={defaultUserPic} alt="" />
                <div className='flex justify-between'>
                    <div>
                        <h1 className="text-xl">{author.name}</h1>
                        <p>{author.published_date}</p>
                    </div>
                    <div className='space-x-2'>
                        <button className='btn'>Bookmark</button>
                        <button className='btn'>share</button>
                    </div>
                </div>
            </div>
            <h1 className="text-2xl font-bold">{title}</h1>
            <img className='' src={newsImage} alt="" />
            <p>{details} <Link className='text-orange-400 font-bold' to="#">Read More </Link></p>
        </div >
    );
};

export default NewsCard;