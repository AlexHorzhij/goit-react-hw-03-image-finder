import PropTypes from 'prop-types';

import { Button } from "./Button.styled";

export function LoadButton({LoadMore}) {
    return <Button onClick={LoadMore}>
        Load more
    </Button>
};

LoadButton.propTypes = {
    LoadMore: PropTypes.func,
}