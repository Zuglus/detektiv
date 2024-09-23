import { classNames } from '@/components/utility/classNames';

interface PostContentProps {
    title: string;
    content: string;
    prev?: string;
    next?: string;
}

export default function PostContent({ title, content, prev, next }: PostContentProps) {
    return (
        <>
            <div className="bg-white shadow-lg shadow-neutral-800 mx-auto my-10 px-6 py-8 rounded-lg max-w-4xl">
                <h2 className="mx-auto max-w-2xl font-bold font-serif text-[#2a4f4f] text-4xl text-center uppercase">
                    {title}
                </h2>
                <div
                    className="mt-6 text-gray-700 text-lg leading-loose"
                    dangerouslySetInnerHTML={{ __html: content }}
                />
            </div>
            <div
                className={classNames(
                    prev ? 'justify-between' : 'justify-end',
                    'flex w-full max-w-4xl mb-10 mx-auto'
                )}
            >
                {/* Previous Post Button */}
                <a
                    href={prev}
                    className={classNames(
                        prev ? '' : 'hidden',
                        'inline-flex items-center px-6 py-3 mr-3 text-sm font-medium text-[#2a4f4f] border border-[#50c878] hover:border-[#3a9f77] hover:bg-[#50c878] hover:text-white transition-all duration-300'
                    )}
                >
                    <svg
                        aria-hidden="true"
                        className="mr-2 w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fillRule="evenodd"
                            d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
                            clipRule="evenodd"
                        ></path>
                    </svg>
                </a>

                {/* Next Post Button */}
                <a
                    href={next}
                    className={classNames(
                        next ? '' : 'hidden',
                        'inline-flex items-center px-6 py-3 text-sm font-medium text-[#2a4f4f] border border-[#50c878] hover:border-[#3a9f77] hover:bg-[#50c878] hover:text-white transition-all duration-300'
                    )}
                >
                    <svg
                        aria-hidden="true"
                        className="ml-2 w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fillRule="evenodd"
                            d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                            clipRule="evenodd"
                        ></path>
                    </svg>
                </a>
            </div>
        </>
    );
}
