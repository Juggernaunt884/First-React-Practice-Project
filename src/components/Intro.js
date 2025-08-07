import './components.css';
function Intro(props) {
     return (
        <div className="blog-post-intro">
            <h2>{props.title}</h2>
            <div>
                <p>{props.description}</p>
                <p className="link">{props.link}</p>
            </div>
        </div>
    );
};

export default Intro;