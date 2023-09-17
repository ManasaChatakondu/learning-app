import useGithub from './Hooks/useGitHubUser';


const GithubUser=({userName})=>{
    
    const {user, error, loading} = useGithub(userName);

    return(
        <div className="github-user">
            {loading&& <p>Loading please wait...</p>}
            {error && <p>error.message</p>}
            {user&&
                <ul>
                    <li>{user.login}</li>
                    <li>{user.public_repos}</li>
                    <li><img src={user.avatar_url} alt={user.login}></img></li>
                    <li>{user.public_repos}</li>
                </ul>}
        </div>
    );
}

export default GithubUser;