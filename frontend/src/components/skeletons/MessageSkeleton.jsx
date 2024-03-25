const MessageSkeleton = () => {
	return (
		<>
			<div className='flex gap-3 items-center'>
				<div className='skeleton w-5 h-5 sm:w-10 sm:h-10 rounded-full shrink-0 bg-slate-500'></div>
				<div className='flex flex-col gap-1'>
					<div className='skeleton h-4 w-20 sm:w-40 bg-slate-500'></div>
					<div className='skeleton h-4 w-20 sm:w-40 bg-slate-500'></div>
				</div>
			</div>
			<div className='flex gap-3 items-center justify-end'>
				<div className='flex flex-col gap-1'>
					<div className='skeleton h-4 w-20 sm:w-40 bg-slate-500'></div>
				</div>
				<div className='skeleton w-5 h-5 sm:w-10 sm:h-10 rounded-full shrink-0 bg-slate-500'></div>
			</div>
		</>
	);
};
export default MessageSkeleton;