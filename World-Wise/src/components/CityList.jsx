/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import Spinner from './Spinner'
import styles from './CityList.module.css'
import CityItem from './CityItem'
import Message from './Message'


function CityList({cities, isLoading}) {
    if (isLoading) return <Spinner />
    if (!cities.length) return <Message message='Add your first city by clicking on a city on the map' />
    
    return (
        <div>
            <ul className={styles.CityList}>
                {cities.map((city) => <CityItem key={city.id} city={city}/>
                )}
            </ul>
        </div>
    )
}

export default CityList
