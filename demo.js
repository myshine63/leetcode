import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

function connect(mapStateToProps, mapDispatchToProps) {
    return function (WrappedComponent) {
        return function (props) {
            const state = useSelector(mapStateToProps);
            const dispatch = useDispatch();

            const boundActionCreators = {};
            for (let key in mapDispatchToProps) {
                boundActionCreators[key] = (...args) => dispatch(mapDispatchToProps[key](...args));
            }

            return <WrappedComponent {...props} {...state} {...boundActionCreators} />;
        };
    };
}
