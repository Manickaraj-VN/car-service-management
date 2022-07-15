const exp =require('express');
const sql=require('mysql');
const app=exp();

const cors=require('cors');
const { request, query } = require('express');
const{response}=exp;
app.use(cors());
app.use(exp.json());

const c=sql.createConnection({
    host : "localhost",
    user : "root",
    password : "manickaraj866",
    database : "project"
});

c.connect(function(err){
    if (err){
        console.log('Error');
    }
    else{
        console.log('connected');
    }
});
app.post('/login',(request,response)=>{
    const username2=request.body.username;
    const password2=request.body.password;
    c.query('select username,password,role from login where username=?',[username2],function(error,result){
        if(error){
            const s={status:'error'};
            response.send(s);
        }
        else{
            const username1=result[0].username;
            const password1=result[0].password;
            const role1=result[0].role;
            if(username2==username1 && password2==password1){
                if(role1=='1'){
                    const s={status:'pass',role:'admin'}
                    response.send(s);
                }
                else if(role1=='2'){
                    const s={status:'pass',role:'staff'}
                    response.send(s);
                }
            }
            else if(username2 !== username1 && password2 !== password1) 
            {
                const s={status:'err'};
                response.send(s);
            }
            else{
                const s={status:'err'};
                response.send(s);
            }
            // if (result.length>0){
            //     response.send(result);
            //     console.log(result)
            // }
            // else{
            //     const s={status:"worng username/password"}
            //     response.send(s);
            //     console.log(s)
            // }
            
            }
    });

});
app.post('/employee',(request,response)=>{
    const f_name1 = request.body.f_name;
    const l_name1 = request.body.l_name;
    const age1 = request.body.age;
    const ad1 = request.body.ad;
    const ci1 = request.body.ci;
    const zip1 = request.body.zip;
    const id_n1 = request.body.id_n;
    const id_p1 = request.body.id_p;
    const exps1 = request.body.exp;
    const dept1 = request.body.dept;
    const ph1 = request.body.ph;
    const em1 = request.body.em;
    const u_n = request.body.u_n;
    const psd = request.body.psd;

    c.query('insert into employee (f_name,l_name,age,address,city,zip,id_name, id_proof_no,work_exp,dept,ph_no,e_mail) values(?,?,?,?,?,?,?,?,?,?,?,?)',[f_name1,l_name1,age1,ad1,ci1,zip1,id_n1,id_p1,exps1,dept1,ph1,em1],
    function(error,result){
        if(error){
            const s={status:'error'};
            response.send(s);
            console.log('error');
            // console.log(error);
        }
        else{
            console.log('success');
            
        }
    });
    c.query('insert into login (username,password) values(?,?)',[u_n,psd],
    function(error,result){
        if(error){
            
            console.log('log error');
        }
        else{
            console.log(' log success');
            
        }
    });
});

app.listen(3001);