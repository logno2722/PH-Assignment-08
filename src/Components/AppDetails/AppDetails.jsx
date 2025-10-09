import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const AppDetails = () => {

    const {id}=useParams();
    const appId = parseInt(id);
    const data = useLoaderData();
    const singleApp = data.find(app=>app.id===appId);

    return (
        <div>
            <h4>Book details</h4>
            
        </div>
    );
};

export default AppDetails;