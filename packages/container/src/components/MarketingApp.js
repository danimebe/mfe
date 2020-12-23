import {
    mount
} from 'marketing/MarketingApp';
import React, {
    useRef,
    useEffect
} from 'react';

export default () => {
    const ref = useRef(null);

    console.log(mount);

    useEffect(() => {
        mount(ref.current);
    }, []);

    return <div ref = {ref} />
}