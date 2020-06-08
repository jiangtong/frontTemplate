/** @format */

import { useState } from 'react';

const useUpdate = () => {
    const [, setFlag] = useState();

    const update = () => {
        setFlag(Date.now());
    };

    return update;
};

export default useUpdate;
