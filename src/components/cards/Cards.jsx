import Card from '../card/Card.jsx';
import styles from './Cards.module.css';

export default function Cards(props) {
   const { characters, onClose } = props;
   return (
   <div className={styles.cardFlex}>
      {characters.map((char) => (
         <Card 
            id = {char.id}  
            key={char.id}
            name = {char.name}
            species = {char.species}
            gender = {char.gender}
            image = {char.image}
            onClose = {() => onClose(char.id)}
         />
      ))}
   </div>
   );
}
