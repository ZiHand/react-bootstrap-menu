import React from 'react';

const MealCard = ({img_url, img_alt, text}) => 
{
    return (
        <div className="col-md-4 col-sm-6">
            <div className="card mb-4 shadow-sm">
                <img src={img_url} alt={img_alt} className="w-100 rounded"/>
                <div className="card-body">
                    <p className="card-text">{text}</p>
                    <div className="btn-group">
                        <button type="button" className="btn btn-sm btn-outline-secondary" data-toggle="modal" data-target="#myModal">Decouvrir</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MealCard;