import { FunctionComponent } from 'react';
import { CountryType } from '../types';

interface ICountyrProps {
    country: CountryType
}


const Country: FunctionComponent<ICountyrProps> = (props) => {
    const { country } = props;
    return (
        <p>{country.name} </p>
    );
}

export default Country;