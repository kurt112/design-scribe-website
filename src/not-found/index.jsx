import {Link} from 'react-router-dom';
import Icon from '../components/Icon.jsx';

export default function NotFound() {
    return (
        <section className="container-page py-32 text-center">
            <p className="eyebrow">404</p>
            <h1 className="mt-4 text-4xl font-extrabold">Page not found</h1>
            <p className="mx-auto mt-4 max-w-md text-ink-500">The page you’re looking for doesn’t exist or has moved.</p>
            <Link to="/" className="btn-primary mt-8">
                Back to home
                <Icon name="arrow-right" className="h-4 w-4"/>
            </Link>
        </section>
    );
}
