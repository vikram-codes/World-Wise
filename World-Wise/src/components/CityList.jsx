/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import Spinner from './Spinner'
import styles from './CityList.module.css'
import CityItem from './CityItem'



function CityList({cities, isLoading}) {
    if (isLoading) return <Spinner />
    
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
