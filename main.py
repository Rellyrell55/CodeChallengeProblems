def findDuplicate(self, paths: List[str]) -> List[List[str]]:
    # creating hash map or dictonary to read keys and values faster
    # every empty key will be an array of arrays 
    dic = collections.defaultdict(list)
    
    # The first loop is for getting into the all the paths to get out keys and vaules 
    for path in paths: 
        
        #get that paths/directory and the files because the are split by a space 
        #used  * the if there are more then one file 
        directory, *files = path.split(' ')
        
        #now time to loop through the files
        for file in files:
            
            #we will now have the name of the file and the content and spilt it via ( 
            name, content = file.split('(')
            
            #now we add the key and values to our dictonary(dic) with the content being the key 
            dic[content].append(directory + '/' + name)
            
    #lastly loop though the values and if the length is greater then 1 we return those values
    return [v for v in dic.values() if len(v) > 1] 