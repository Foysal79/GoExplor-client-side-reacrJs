

const BookingCard = ({card}) => {
    const {serviceName,
        pictureURL,
        yourName,
        yourEmail,
        Price,
        description,
        serviceArea,
        ServiceProviderImage} = card || {}
    return (
        <div>
            <div>
                <img src={pictureURL} alt="" />
            </div>
        </div>
    );
};

export default BookingCard;