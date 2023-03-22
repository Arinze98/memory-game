import React, {useState} from 'react'
import { FaChevronLeft, FaChevronRight} from 'react-icons/fa';
import people from './data';

function Review() {
    const [index, setIndex] = useState(0)
    const {name, age, text, image} = people[index]

    const checkNumber = (number)=> {
        if(number > people.length - 1) {
            return 0
        }
        if(number < 0) {
            return people.length - 1
        }
        return number
    }

    const nextPerson = ()=> {
        setIndex((index)=> {
            let newIndex = index + 1
            return checkNumber(newIndex)
        })
    }
    const prevPerson = ()=> {
        setIndex((index)=> {
            let newIndex = index - 1
            return checkNumber(newIndex)
        })
    }
    const randomBtn = ()=> {
        let randomNumber = Math.floor(Math.random() * people.length)

        if(randomNumber === index) {
        randomNumber = index + 1
        }
        setIndex(checkNumber(randomNumber))
    }

    return (
        <main>
            <div className="box">
                <h2 className='head'>reviews</h2>
                <div className="img-container">
                    <img src={image} alt={name} className='person-img'/>
                </div>
                <div className="content-con">
                    <h2>{name}</h2>
                    <h4>age {age}</h4>
                    <p>{text}</p>
                </div>
                <div className="btn-con">
                    <button className="prev-btn" onClick={prevPerson}>
                        <FaChevronLeft />
                    </button>
                    <button className="next-btn" onClick={nextPerson}>
                        <FaChevronRight />
                    </button>
                </div>
                <button className="random-btn" onClick={randomBtn}>random</button>
            </div>
        </main>
    )
}


export default Review;