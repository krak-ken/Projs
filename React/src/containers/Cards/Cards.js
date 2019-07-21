import React, { Component } from 'react';

import classes from './Cards.css';
import Card from '../../components/Card/Card';
import DescCard from '../../components/DescCard/DescCard';
import image from '../../assets/image.jpg';

class Cards extends Component {
    state = {
        doctors: [
            {
                name: 'Aniket',
                phone: [123456789, 987654321],
                imageUrl: image,
                email: 'ancabgs233@email.com',
                expertise: 'lorem ipsum ckbhc zdkvgds shagsa asg dhjvbvdb idvugdvv.',
                description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam tempore, fugit,' + 
                                 'facere, iste deleniti provident eum ad aliquid possimus voluptatum rem corrupti' + 
                                  'ex mollitia. Dicta eligendi odio minus possimus adipisci?' + 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam tempore, fugit,' + 
                                  'facere, iste deleniti provident eum ad aliquid possimus voluptatum rem corrupti' + 
                                   'ex mollitia. Dicta eligendi odio minus possimus adipisci?'      
            },
            {
                name: 'Aniket',
                phone: [123456789, 987654321],
                imageUrl: image,
                email: 'ancabgs233@email.com',
                expertise: 'lorem ipsum ckbhc zdkvgds shagsa asg dhjvbvdb idvugdvv.',
                description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam tempore, fugit,' + 
                                 'facere, iste deleniti provident eum ad aliquid possimus voluptatum rem corrupti' + 
                                  'ex mollitia. Dicta eligendi odio minus possimus adipisci?'      
            }
        ],
        lawyers: [
            {
                name: 'Aniket',
                phone: [123456789, 987654321],
                imageUrl: image,
                email: 'ancabgs233@email.com',
                expertise: 'lorem ipsum ckbhc zdkvgds shagsa asg dhjvbvdb idvugdvv.',
                description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam tempore, fugit,' + 
                                 'facere, iste deleniti provident eum ad aliquid possimus voluptatum rem corrupti' + 
                                  'ex mollitia. Dicta eligendi odio minus possimus adipisci?'      
            },
            {
                name: 'Aniket',
                phone: [123456789, 987654321],
                imageUrl: image,
                email: 'ancabgs233@email.com',
                expertise: 'lorem ipsum ckbhc zdkvgds shagsa asg dhjvbvdb idvugdvv.',
                description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam tempore, fugit,' + 
                                 'facere, iste deleniti provident eum ad aliquid possimus voluptatum rem corrupti' + 
                                  'ex mollitia. Dicta eligendi odio minus possimus adipisci?'      
            }
        ],
        drivers: [
            {
                name: 'Aniket',
                phone: [123456789, 987654321],
                imageUrl: image,
                email: 'ancabgs233@email.com',
                expertise: 'lorem ipsum ckbhc zdkvgds shagsa asg dhjvbvdb idvugdvv.',
                description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam tempore, fugit,' + 
                                 'facere, iste deleniti provident eum ad aliquid possimus voluptatum rem corrupti' + 
                                  'ex mollitia. Dicta eligendi odio minus possimus adipisci?'      
            },
            {
                name: 'Aniket',
                phone: [123456789, 987654321],
                imageUrl: image,
                email: 'ancabgs233@email.com',
                expertise: 'lorem ipsum ckbhc zdkvgds shagsa asg dhjvbvdb idvugdvv.',
                description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam tempore, fugit,' + 
                                 'facere, iste deleniti provident eum ad aliquid possimus voluptatum rem corrupti' + 
                                  'ex mollitia. Dicta eligendi odio minus possimus adipisci?'      
            }
        ],
        maids: [
            {
                name: 'Aniket',
                phone: [123456789, 987654321],
                imageUrl: image,
                email: 'ancabgs233@email.com',
                expertise: 'lorem ipsum ckbhc zdkvgds shagsa asg dhjvbvdb idvugdvv.',
                description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam tempore, fugit,' + 
                                 'facere, iste deleniti provident eum ad aliquid possimus voluptatum rem corrupti' + 
                                  'ex mollitia. Dicta eligendi odio minus possimus adipisci?'      
            },
            {
                name: 'Aniket',
                phone: [123456789, 987654321],
                imageUrl: image,
                email: 'ancabgs233@email.com',
                expertise: 'lorem ipsum ckbhc zdkvgds shagsa asg dhjvbvdb idvugdvv.',
                description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam tempore, fugit,' + 
                                 'facere, iste deleniti provident eum ad aliquid possimus voluptatum rem corrupti' + 
                                  'ex mollitia. Dicta eligendi odio minus possimus adipisci?'      
            }
        ],
        barbers: [
            {
                name: 'Aniket',
                phone: [123456789, 987654321],
                imageUrl: image,
                email: 'ancabgs233@email.com',
                expertise: 'lorem ipsum ckbhc zdkvgds shagsa asg dhjvbvdb idvugdvv.',
                description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam tempore, fugit,' + 
                                 'facere, iste deleniti provident eum ad aliquid possimus voluptatum rem corrupti' + 
                                  'ex mollitia. Dicta eligendi odio minus possimus adipisci?'      
            },
            {
                name: 'Aniket',
                phone: [123456789, 987654321],
                imageUrl: image,
                email: 'ancabgs233@email.com',
                expertise: 'lorem ipsum ckbhc zdkvgds shagsa asg dhjvbvdb idvugdvv.',
                description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam tempore, fugit,' + 
                                 'facere, iste deleniti provident eum ad aliquid possimus voluptatum rem corrupti' + 
                                  'ex mollitia. Dicta eligendi odio minus possimus adipisci?'      
            }
        ]
    }

    render() {
        
        let cards = [];
        Object.keys(this.state).forEach(el => {
            let card =  this.state[el].map((prof, ind) => {
                return (<Card key={el+ind} name={prof.name} phone={prof.phone}
                            imageUrl={prof.imageUrl} 
                            expertise={prof.expertise}
                            email={prof.email}/>)
            });
            cards.push(card);
        });

        return (
            <div className={classes.Cards}>
                {/* <DescCard name={this.state.doctors[0].name} phone={this.state.doctors[0].phone}
                            imageUrl={this.state.doctors[0].imageUrl} 
                            expertise={this.state.doctors[0].expertise}
                            email={this.state.doctors[0].email}
                            description={this.state.doctors[0].description}/> */}
                { cards }
            </div>
        );

    }
}

export default Cards;
