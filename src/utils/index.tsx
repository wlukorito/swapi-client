import {IState} from '../context/state';

export const parsePageUrl = (url: string): string => {
    const baseURL: string = 'https://swapi.dev/api/people/?page=';
    
    if (url) {
        url = url.replace(baseURL, '');
    } else {
        url = '';
    }

    return url;
};

export const getCurrentPage = (state: IState) => {
    const {nextPage, previousPage} = state;

    let current = '';
    
    if(nextPage){
        const nxt = parseInt(nextPage);
        if(!isNaN(nxt)){
            current = `${nxt - 1}`
        }
    } else if(previousPage){
        const prev = parseInt(previousPage);
        if(!isNaN(prev)){
            current = `${prev + 1}`;
        }
    }

    return current;
}