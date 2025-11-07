

const DashboardTitle = ({title,subTitle}) => {
    return (
        <div className="mb-6">
            <h1 className="text-2xl font-bold text-teal-600">{title}</h1>
            <p className="text-sm text-gray-500 max-w-sm">{subTitle}</p>
        </div>
    );
};

export default DashboardTitle;