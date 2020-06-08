/** @format
 * 按需加载
 */

import React, { useState, useEffect, Suspense, lazy } from 'react';

export default (factory, fallback = null) => {
    const [Component, setCompoent] = useState(null);

    useEffect(() => {
        // factory();
        const Com = lazy(factory);

        setCompoent(
            <Suspense fallback={fallback}>
                <Com></Com>
            </Suspense>
        );
    }, [factory, fallback]);

    return () => Component;
};
