
const API_URL='https://api.github.com/users/'



class Github {
  constructor() {
    (this.client_id = "e69d3e12f519fc7be012"),
      (this.client_secret = "fa85afe05d3099098e0387e2f9eaccc771957ac7");
      this.repos_count=10;
      this.repos_sort='asc'
  }
  async getUser(username) {
    //console.log(username);
try{

    const profileRes=await fetch(`https://api.github.com/users/${username}?client_id=${this.client_id}&client_secret=${this.client_secret}`)
   
 const reposRes=await fetch(`https://api.github.com/users/${username}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`)
   
 const repos=await reposRes.json()
 //console.log(repos)
 const profile= await profileRes.json()
    //console.log(profile)
    return {profile,repos}

}catch(error){console.log(error)}
  




  }
}

export default Github;
