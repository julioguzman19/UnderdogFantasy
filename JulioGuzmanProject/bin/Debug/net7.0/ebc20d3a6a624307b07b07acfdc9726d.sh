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

ps 70215;
while [ $? -eq 0 ];
do
  sleep 1;
  ps 70215 > /dev/null;
done;

for child in $(list_child_processes 70218);
do
  echo killing $child;
  kill -s KILL $child;
done;
rm /Users/julioguzman/Repos/UnderdogFantasy/JulioGuzmanProject/bin/Debug/net7.0/ebc20d3a6a624307b07b07acfdc9726d.sh;
