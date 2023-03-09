# import json 





# with open('skill_data.json', 'r') as file:
#     skill_data = json.load(file)






# print(skill_data)
import requests as r
from .models import Demon, Skill, db

def finddemon(demonname):
    demonname = demonname.lower()
    url = f"http://127.0.0.1:5000/demons"
    response = r.get(url)
    if response.ok:
        my_dict = response.json()

        for demon in my_dict["Demons"]:
            if demon["name"].lower() == demonname:
                print(demonname)
                break
            
        print(demon['name'])
        demon_dict = {}
        
        demon_dict['name'] = demon['name']
        demon_dict['hp'] = demon['hp']
        demon_dict['strength'] = demon["stats"]["st"]
        demon_dict['magic'] = demon["stats"]["ma"]
        demon_dict['defense'] = demon["stats"]["vi"]
        demon_dict['weak'] = demon['resistances']['weak']
        demon_dict['null'] = demon['resistances']['null']
        demon_dict['repel'] = demon['resistances']['repel']
        demon_dict['lore'] = demon['lore']
        return demon_dict
    else:
        raise Exception("The demon you're looking for does not exist.")
    
# def get_skill_data(skillname):
#     #Probably pull from DB to get skill name from the demon table

#     if response.ok:
#         skill_dict = {}
#         skill_dict['name'] = my_dict2['name']
#         skill_dict['Type'] = my_dict2['Type']
#         skill_dict['Affinity'] = my_dict2['Affinity']
#         skill_dict['Range'] = my_dict2['Range']
#         skill_dict['Power'] = my_dict2['Power']
#         return skill_dict
#     else:
#         raise Exception("Error getting skill data")


    
    