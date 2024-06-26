        const jobsData = {
            "jobs" : [{
            "id": 1,
            "company": "Photosnap",
            "logo": "https://d3dyfaf3iutrxo.cloudfront.net/general/upload/d1b1de43ca6a441e99543d80eb517d34.svg",
            "new": true,
            "featured": true,
            "position": "Senior Frontend Developer",
            "role": "Frontend",
            "level": "Senior",
            "postedAt": "1d ago",
            "contract": "Full Time",
            "location": "USA Only",
            "languages": ["HTML", "CSS", "JavaScript"],
            "tools": []
            },
            {
            "id": 2,
            "company": "Manage",
            "logo": "https://d3dyfaf3iutrxo.cloudfront.net/general/upload/be5619415553470faca94f94f72b6e68.svg",
            "new": true,
            "featured": true,
            "position": "Fullstack Developer",
            "role": "Fullstack",
            "level": "Midweight",
            "postedAt": "1d ago",
            "contract": "Part Time",
            "location": "Remote",
            "languages": ["Python"],
            "tools": ["React"]
            },
            {
            "id": 3,
            "company": "Account",
            "logo": "https://d3dyfaf3iutrxo.cloudfront.net/general/upload/c245c838322e4ebdae5692c9d9a8bdbe.svg",
            "new": true,
            "featured": false,
            "position": "Junior Frontend Developer",
            "role": "Frontend",
            "level": "Junior",
            "postedAt": "2d ago",
            "contract": "Part Time",
            "location": "USA Only",
            "languages": ["JavaScript"],
            "tools": ["React", "Sass"]
            },
            {
            "id": 4,
            "company": "MyHome",
            "logo": "https://d3dyfaf3iutrxo.cloudfront.net/general/upload/cd85fb2d60f04ea7aea3ed183a37a607.svg",
            "new": false,
            "featured": false,
            "position": "Junior Frontend Developer",
            "role": "Frontend",
            "level": "Junior",
            "postedAt": "5d ago",
            "contract": "Contract",
            "location": "USA Only",
            "languages": ["CSS", "JavaScript"],
            "tools": []
            },
            {
            "id": 5,
            "company": "Loop Studios",
            "logo": "https://d3dyfaf3iutrxo.cloudfront.net/general/upload/a4cd5572845541adb89e962794ca86fe.svg",
            "new": false,
            "featured": false,
            "position": "Software Engineer",
            "role": "Fullstack",
            "level": "Midweight",
            "postedAt": "1w ago",
            "contract": "Full Time",
            "location": "Worldwide",
            "languages": ["JavaScript", "Ruby"],
            "tools": ["Sass"]
            },
            {
            "id": 6,
            "company": "FaceIt",
            "logo": "https://d3dyfaf3iutrxo.cloudfront.net/general/upload/e8c50754b72f43f6a3eefd188acdac7c.svg",
            "new": false,
            "featured": false,
            "position": "Junior Backend Developer",
            "role": "Backend",
            "level": "Junior",
            "postedAt": "2w ago",
            "contract": "Full Time",
            "location": "UK Only",
            "languages": ["Ruby"],
            "tools": ["RoR"]
            },
            {
            "id": 7,
            "company": "Shortly",
            "logo": "https://d3dyfaf3iutrxo.cloudfront.net/general/upload/96e8d27ab40b4015a59e589687dd177d.svg",
            "new": false,
            "featured": false,
            "position": "Junior Developer",
            "role": "Frontend",
            "level": "Junior",
            "postedAt": "2w ago",
            "contract": "Full Time",
            "location": "Worldwide",
            "languages": ["HTML", "JavaScript"],
            "tools": ["Sass"]
            },
            {
            "id": 8,
            "company": "Insure",
            "logo": "https://d3dyfaf3iutrxo.cloudfront.net/general/upload/2dd17882e68d4045a18eab7dfb9c37de.svg",
            "new": false,
            "featured": false,
            "position": "Junior Frontend Developer",
            "role": "Frontend",
            "level": "Junior",
            "postedAt": "2w ago",
            "contract": "Full Time",
            "location": "USA Only",
            "languages": ["JavaScript"],
            "tools": ["Vue", "Sass"]
            },
            {
            "id": 9,
            "company": "Eyecam Co.",
            "logo": "https://d3dyfaf3iutrxo.cloudfront.net/general/upload/68e12689f98740ddaa1f4a78bc2d4f7c.svg",
            "new": false,
            "featured": false,
            "position": "Full Stack Engineer",
            "role": "Fullstack",
            "level": "Midweight",
            "postedAt": "3w ago",
            "contract": "Full Time",
            "location": "Worldwide",
            "languages": ["JavaScript", "Python"],
            "tools": ["Django"]
            },
            {
            "id": 10,
            "company": "The Air Filter Company",
            "logo": "https://d3dyfaf3iutrxo.cloudfront.net/general/upload/db318fbeb51d41b6bc9388259899e297.svg",
            "new": false,
            "featured": false,
            "position": "Front-end Dev",
            "role": "Frontend",
            "level": "Junior",
            "postedAt": "1mo ago",
            "contract": "Part Time",
            "location": "Worldwide",
            "languages": ["JavaScript"],
            "tools": ["React", "Sass"]
            }],
            "bg_header_desktop":"https://d3dyfaf3iutrxo.cloudfront.net/general/upload/7caa466cbd3c4975b9e39ec6700b1656.svg",
            "bg_header_mobile":"https://d3dyfaf3iutrxo.cloudfront.net/general/upload/ba3bba082bbf4cfb9232732eeca4206d.svg",
            "icon_remove":"https://d3dyfaf3iutrxo.cloudfront.net/general/upload/05c800be8f0b4d569e908f1aa949feed.svg"
        }

        const copyOfCard = document.querySelector('.start');
        const tagNode = document.querySelector('.tag').cloneNode(false);
        
        function updateJobTags(){
            jobsData.jobs = jobsData.jobs.map(it => {
                it["tags"] = [it.role, it.level, ...it.languages, ...it.tools];
                return it;
            });
        }

        function updateJobCard(Jdata, copyOfNode){
            let childrenOfCopy = copyOfNode.children;
            childrenOfCopy[0].src = Jdata.logo;
            childrenOfCopy[1].children[0].children[0].innerText = Jdata.company;

            if(Jdata.new){
                childrenOfCopy[1].children[0].children[1].style.visibility = "visible";
                childrenOfCopy[1].children[0].children[1].innerText = "NEW!";
            }
            else{
                childrenOfCopy[1].children[0].children[1].style.visibility = "hidden";
            }

            if(Jdata.featured){
                childrenOfCopy[1].children[0].children[2].style.visibility = "visible";
                childrenOfCopy[1].children[0].children[2].innerText = "FEATURED";
                copyOfNode.id = "special";
            }
            else{
                childrenOfCopy[1].children[0].children[2].style.visibility = "hidden";
                copyOfNode.id = "";
            }


            childrenOfCopy[1].children[1].innerText = Jdata.position;
            childrenOfCopy[1].children[2].children[0].children[0].innerText = Jdata.postedAt;
            childrenOfCopy[1].children[2].children[0].children[1].innerText = Jdata.contract;
            childrenOfCopy[1].children[2].children[0].children[2].innerText = Jdata.location;

            let n = 5 - Jdata.tags.length;
            let i = 0;
            let buttons = childrenOfCopy[2].children;

            while(i < n){
                buttons[i].style.display = "none";
                i++;
            }


            let k = 0;
            while(i < 5){
                buttons[i].style.display = "block";
                buttons[i].innerText = Jdata.tags[k];
                i++;
                k++;
            }
            return copyOfNode;
        } 

        function removeChildrens(container){
            while(container.firstElementChild){
                container.removeChild(container.firstElementChild);
            }
        }

        function generateJobCards(JdataArr){
            const container = document.querySelector('.job-card');
            removeChildrens(container);
            for(let it of JdataArr){
                let copyOfNode = copyOfCard.cloneNode(true);
                copyOfNode = updateJobCard(it, copyOfNode);
                container.append(copyOfNode);
            }
            eventlis();
        }

        let filteredArr = [];
        function filterJobsByTags(filteredArr){
            let filtered_Jdata = jobsData.jobs.filter(it => {
                let cpy = filteredArr.filter(i => {
                if(it.tags.find(item => item == i)) return true;
                return false;
                });
                return cpy.length == filteredArr.length;
            });
            generateJobCards(filtered_Jdata);
        }


        function downContainer(){
            const container = document.querySelector(".job-card");
            container.style.marginTop = "2vh";
        }

        function upContainer(){
            const container = document.querySelector(".job-card");
            container.style.marginTop = "0";
        }


        function eventlistenersSearchbar(node){
            let clearBtn = node.lastElementChild;
            clearBtn.addEventListener('click', () =>{
                filteredArr = [];
                removeChildrens(node);
                generateJobCards(jobsData.jobs);
                node.style.visibility = "hidden";
                upContainer();
        });

        Array.from(node.children).forEach(it => {
            if(it != clearBtn){
            it.lastElementChild.addEventListener('click', (e) =>{
                filteredArr = filteredArr.filter(i => i != e.target.closest('div').firstElementChild.innerText);
                filterJobsByTags(filteredArr);
                generateSearchBar(filteredArr);
                if(filteredArr.length == 0){
                document.querySelector('#searchBar').style.visibility = "hidden";
                upContainer();
                }
            });
            }
        })
        }

        function generateSearchBar(filteredArr){
            downContainer();

            let div = document.querySelector('#searchBar');
            div.style.visibility = "visible";
            removeChildrens(div);

            let clearBtn = document.createElement('button');
            clearBtn.id = "clearBtn";
            clearBtn.innerText = "Clear";

            for(let it of filteredArr){
                let innerDiv = document.createElement('div');
                innerDiv.className = "innerDiv";
                let btn = document.createElement('button');
                btn.innerText = "X";
                btn.className = "X";
                let node = tagNode.cloneNode();
                node.style.borderRadius = "10px 0px 0px 10px";
                node.style.height = "38px";
                node.style.margin = "0px";
                node.innerText = it;
                innerDiv.append(node);
                innerDiv.append(btn);
                div.append(innerDiv);
            }

            div.append(clearBtn);
            eventlistenersSearchbar(div);
            document.querySelector('body').insertBefore(div, document.querySelector('.jobs'));

        }


        function eventlis(){
            const tags = Array.from(document.querySelectorAll('.tag'));
            tags.forEach(it => {
                it.addEventListener('click', (e)=>{
                if(filteredArr.find(i => i == e.target.innerText) == undefined){
                    filteredArr.push(e.target.innerText);
                    filterJobsByTags(filteredArr);
                    generateSearchBar(filteredArr);
                }
                });
            });
        }
        updateJobTags();
        generateJobCards(jobsData.jobs);
