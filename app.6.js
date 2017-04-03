        function bindActionCreators(actionCreators, dispatch) {

            const boundActionCreators = {};

            Object.keys(actionCreators).forEach(key => {

                boundActionCreators[key] = function(...params) {
                    dispatch(actionCreators[key](...params));
                };

            });

            return boundActionCreators;

        }


