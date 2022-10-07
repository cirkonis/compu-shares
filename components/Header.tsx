const profile = {
    name: 'Luky Boi',
    email: 'ricardo.cooper@example.com',
    avatar:
        'https://cataas.com/cat/cute',
    backgroundImage:
        'https://images.unsplash.com/photo-1444628838545-ac4016a5418a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    fields: [
        ['Phone', '(555) 123-4567'],
        ['Email', 'ricardocooper@example.com'],
        ['Title', 'Senior Front-End Developer'],
        ['Team', 'Product Development'],
        ['Location', 'San Francisco'],
        ['Sits', 'Oasis, 4th floor'],
        ['Salary', '$145,000'],
        ['Birthday', 'June 8, 1990'],
    ],
    deets: {
        location: 'DK',
        title: 'Student Assistant',
    }
}

export default function Header() {
    return (
        <div>
            <div>
                <img className="h-32 w-full object-cover lg:h-48" src={profile.backgroundImage} alt="" />
            </div>
            <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
                <div className="-mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5">
                    <div className="flex">
                        <img className="h-24 w-24 rounded-full ring-4 ring-white sm:h-32 sm:w-32" src={profile.avatar} alt="" />
                    </div>
                    <div className="mt-6 sm:flex sm:min-w-0 sm:flex-1 sm:items-center sm:justify-end sm:space-x-6 sm:pb-1">
                        <div className="mt-16 min-w-0 flex-1 sm:hidden md:block">
                            <h1 className="truncate text-2xl font-bold text-gray-900">{profile.name}</h1>
                            <div className="mt-1 flex flex-row text-xs text-gray">
                            <h2 className="mr-4">{profile.deets.location}</h2>
                            <h2>{profile.deets.title}</h2>
                            </div>
                        </div>
                        <div className="justify-stretch mt-16 flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4">
                            <button
                                type="button"
                                className="inline-flex justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2"
                            >
                                <span>Do Something</span>
                            </button>
                            <button
                                type="button"
                                className="inline-flex justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2"
                            >
                                <span>Do Something else</span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="mt-6 hidden min-w-0 flex-1 sm:block md:hidden">
                    <h1 className="truncate text-2xl font-bold text-gray-900">{profile.name}</h1>
                </div>
            </div>
        </div>
    )
}
