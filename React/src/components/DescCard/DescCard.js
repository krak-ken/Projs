import React from 'react';

import classes from './DescCard.css';

const descCard = props => {
    let timeSlots = [
        {
            startTime: new Date('July 15, 2019 12:00'),
            endTime: new Date('July 15, 2019 14:00'),
            noOfClients: 4,
            cost: 500
        },
        {
            startTime: new Date('July 15, 2019 15:00'),
            endTime: new Date('July 15, 2019 18:00'),
            noOfClients: 8,
            cost: 300
        },
        {
            startTime: new Date('July 15, 2019 22:00'),
            endTime: new Date('July 16, 2019 01:00'),
            noOfClients: 8,
            cost: 400
        }
    ];

    return (
        <div className={classes.DescCard}>
            <div className={classes.DescCard_Profile}>
                <div className={classes.DescCard_img}>
                    <img src={props.imageUrl} title={props.name} alt={'img'} className={classes.DescCard_img}/>
                </div>
                <div className={classes.DescCard_Info}>
                    <div>Name: {props.name}</div>
                    <div>Phone: {props.phone.join(', ')}</div>
                    <div>Email: {props.email}</div>
                    <div>Expertise: {props.expertise}</div>
                    <div>Description: {props.description}</div>
                </div> 
            </div>
            <div className={classes.FlexRow}>
                {processTime(timeSlots)} 
            </div> 
        </div>
    );
}

function processTime(timeSlots) {
    let ret = [];

    let id=0;
    timeSlots.map((el) => {
        let st = el['startTime'].getTime();
        let et = el['endTime'].getTime();
        let cost = el['cost'];

        let pPT = (et - st) / el['noOfClients'];
        while(st != et){
            let rt = (
                <div key={id++} className={classes.DescCard_Time}>
                    <div><span>{addTime(st)}</span> - <span>{addTime(st + pPT)}</span></div>
                    <div>{cost}</div>
                </div>
            );
            ret.push(rt);
            st = (new Date(st + pPT)).getTime();
        }
    });
    return ret;
}

function addTime(time) {
    let hours = new Date(time).getHours();
    let mins = new Date(time).getMinutes();
    mins = mins.toString().length < 2 ? '0' + mins : mins;
    hours = hours.toString().length < 2 ? '0' + hours : hours;
    return hours + ':' + mins;
}

export default descCard;