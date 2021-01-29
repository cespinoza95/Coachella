import React from 'react';

const Location = () => {
    return (
        <div className="location_wrapper">
            
            <iframe 
                    
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3320.1124421542804!2d-116.23920478529405!3d33.68015254469486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80daf79c7d303911%3A0x7b01c60116ae60ff!2sEmpire%20Polo%20Club!5e0!3m2!1sen!2sus!4v1611263745773!5m2!1sen!2sus"
                    
                
                    
                width="100%" 
                height="500px" 
                frameBorder="0" 
                allowFullScreen
                title="myframe"
            ></iframe>

            <div className="location_tag">
                <div>Location</div>
            </div>

        </div>
    );
};

export default Location;
