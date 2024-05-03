function list_child_processes () {
    local ppid=$1;
    local current_children=$(pgrep -P $ppid);
    local local_child;
    if [ $? -eq 0 ];
    then
        for current_child in $current_children
        do
          local_child=$current_child;
          list_child_processes $local_child;
          echo $local_child;
        done;
    else
      return 0;
    fi;
}

ps 62097;
while [ $? -eq 0 ];
do
  sleep 1;
  ps 62097 > /dev/null;
done;

for child in $(list_child_processes 62101);
do
  echo killing $child;
  kill -s KILL $child;
done;
rm /Users/julioguzman/Repos/UnderdogFantasy/JulioGuzmanProject/bin/Debug/net7.0/713e1641c0874d6bba20b1e88f48332c.sh;
