import React from 'react';

const Testimonial = () => {
    return (
        <div className='w-8/12 mx-auto space-y-20 mt-36'  >
			<div className="text-center space-y-5">
		<p>CLIENTS REVIEWS</p>
		<h1 className="text-5xl font-bold   text-center">What our customers are saying about us</h1>
		<p className='w-6/12 mx-auto text-sm' >Our customers are raving about their incredible experiences with us!</p>
</div>

         <section className="my-8">
	
	<div className="container mx-auto grid grid-cols-1 gap-8 lg:gap-20 md:px-10 md:pb-10 lg:grid-cols-2">
		<div className="flex flex-col items-center mx-12 lg:mx-0">
			<div className="relative text-center">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute top-0 left-0 w-8 h-8 dark:dark:text-gray-700">
					<path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
					<path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
				</svg>
				<p className="px-6 py-1 text-lg italic">😃 We are thrilled to hear that our tourists are having a fantastic time exploring GoExplor. Their smiles are our biggest reward! #HappyTravelers #TourismLove</p>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute bottom-0 right-0 w-8 h-8 dark:dark:text-gray-700">
					<path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
					<path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
				</svg>
			</div>
			<span className="w-12 h-1 my-2 rounded-lg dark:dark:bg-violet-400"></span>
			<p>Foysal Nur Ontor</p>
		</div>
		<div className="flex flex-col items-center max-w-lg mx-12 lg:mx-0">
			<div className="relative text-center">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="absolute top-0 left-0 w-8 h-8 dark:dark:text-gray-700">
					<path fill="currentColor" d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
					<path fill="currentColor" d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
				</svg>
				<p className="px-6 py-1 text-lg italic">🙌 Its all about creating moments that become treasured memories. We are humbled by the positive feedback from our travelers. Thank you for sharing your experiences with us! #TravelWithUs #CustomerLove</p>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="absolute bottom-0 right-0 w-8 h-8 dark:dark:text-gray-700">
					<path fill="currentColor" d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
					<path fill="currentColor" d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
				</svg>
			</div>
			<span className="w-12 h-1 my-2 rounded-lg dark:dark:bg-violet-400"></span>
			<p>Elite Jone</p>
		</div>
	</div>
</section>
        </div>
    );
};

export default Testimonial;