
.project{
    background: var(--bg-color);
  }
  
  .project .heading{
    text-align: center;
    font-size: 5.5rem;
  }
  
  .project .container{
    background-color: #e1352c46;
    color: var(--text-color);
    border-radius: 1rem;
    padding: 2rem;
    width: 80%;
    margin: auto;
    margin-top: 2rem;
  }
  
  .project .container .row{
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    flex-wrap: wrap;
    gap: 1.8rem;
  }
  
  .project .container .bar{
    margin-bottom: 15px;
    padding: 10px;
    border-radius: 1rem;
    background: var(--bg-color);
    transition: 0.4s ease;
    cursor: pointer;
    
  }
  
  .project .container .bar:hover{
    
    box-shadow: 0 10px 10px var(--main-color);
    transform: scale(1.1);
  
  }
  .project .container .bar .info{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    margin-top: 1rem;
  }
  
  .project .container .bar .info span{
    font-size: 1.5rem;
    font-weight: 500;
    margin-left: 0.5rem;
  }
  
  .project .container .bar .info img{
    width: 70px;
    height: 70px;
  
  }
  
  @media screen and(max-width :600px){
    .project .container {
      margin: 0;
      padding: 0;
      width: 10%;
    }
    .project .container .row{
      grid-template-columns: repeat(1, 1fr);
      margin-top: 1rem;
      padding: 2rem 0.2rem 2rem 0.2rem;
      gap: 1rem;
    }
    .project .container{
      margin-top: 5px;
      width: 100%;
    }
  }
  
  