const getStoredBookedHotelApplication = () =>{

    const storedBookedHotelApplication = localStorage.getItem('HotelApplications');
    if (storedBookedHotelApplication){
    return JSON.parse(storedBookedHotelApplication);
    }
    return[];

}

const saveBookedHotelApplication = id =>{
    const storedBookedHotelApplications = getStoredBookedHotelApplication();
    const exist = storedBookedHotelApplications.find(hotelId => hotelId === id);
    if (!exist){

        storedBookedHotelApplications.push(id);
        try{
            localStorage.setItem('HotelApplications', JSON.stringify(storedBookedHotelApplications));

        }
        catch (error){
            console.error('Error saving hotel booked applications to localStorage:', error);
        }
        console.log(storedBookedHotelApplications);

    }
}

export {getStoredBookedHotelApplication, saveBookedHotelApplication}