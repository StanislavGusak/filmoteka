import { useState } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import {
    StyleForm,
    FeedbackCommentFroup,
    StyleLabel,
    StyleInput,
    Textarea,
    ButtonComment,
} from './ComentForm.styled';

const CommentForm = ({ onSubmit }) => {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const [isClicked, setIsClicked] = useState(false);

    const isDisabled = !name && !number;

    const handleSubmit = event => {
        event.preventDefault();
        onSubmit({ name, number });
        setName('');
        setNumber('');
    };

    const handleClickSmoothBtnComment = () => {
        if (name && number && !isClicked) {
            scroll.scrollToBottom({
                duration: 2000,
                smooth: 'easeInOutQuad',
                offset: 0.2,
            });
            setIsClicked(true);
        }
    };

    return (
        <StyleForm onSubmit={handleSubmit}>
            <FeedbackCommentFroup>
                <StyleLabel htmlFor="inputNameComment">Name:</StyleLabel>
                <StyleInput
                    id="inputNameComment"
                    type="text"
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
            </FeedbackCommentFroup>
            <FeedbackCommentFroup>
                <StyleLabel htmlFor="textarea"> Message:</StyleLabel>
                <Textarea
                    id="textarea"
                    maxLength={500}
                    value={number}
                    onChange={e => setNumber(e.target.value)}
                />
            </FeedbackCommentFroup>
            <ButtonComment
                onClick={handleClickSmoothBtnComment}
                type="submit"
                disabled={isDisabled}
            >
                Send Comment
            </ButtonComment>
        </StyleForm>
    );
};

export default CommentForm;