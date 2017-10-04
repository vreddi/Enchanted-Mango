<#
.SYNOPSIS
    .
.DESCRIPTION
    .
.PARAMETER Path
    The path to the directory where all the JSON files reside for bulk upload.
.PARAMETER HostUrl
    Specifies a resolvable hostname for the mongod to which to connect. By default, the mongoimport attempts to connect to a MongoDB instance running on the localhost on port number 27017.
.PARAMETER Database
    Specifies the name of the database on which to run the mongoimport.
.PARAMETER Collection
    Specifies the name of the collection in the mongo database.
.PARAMETER Port
    Specifies the TCP port on which the MongoDB instance listens for client connections.
.PARAMETER Username
    Specifies a username with which to authenticate to a MongoDB database that uses authentication.
.PARAMETER Password
    Specifies a password with which to authenticate to a MongoDB database that uses authentication.
#>
param(
    [Parameter(Mandatory=$true, Position=0, HelpMessage="The path to the directory where all the JSON files reside for bulk upload.")]
    [string]$Path,

    [Parameter(Mandatory=$true, Position=1, HelpMessage="Specifies a resolvable hostname for the mongod to which to connect. By default, the mongoimport attempts to connect to a MongoDB instance running on the localhost on port number 27017.")]
    [string]$HostUrl,

    [Parameter(Mandatory=$true, Position=2, HelpMessage="Specifies the TCP port on which the MongoDB instance listens for client connections.")]
    [string]$Port,

    [Parameter(Mandatory=$true, Position=3, HelpMessage="Specifies the name of the database on which to run the mongoimport.")]
    [string]$Database,

    [Parameter(Mandatory=$true, Position=4, HelpMessage="Specifies the name of the collection in the mongo database.")]
    [string]$Collection,

    [Parameter(Mandatory=$true, Position=5, HelpMessage="Modifies the import process to update existing objects in the database if they match an imported object, while inserting all other objects")]
    [string]$UpsertKey,

    [Parameter(Mandatory=$true, Position=6, HelpMessage="Specifies a username with which to authenticate to a MongoDB database that uses authentication.")]
    [string]$Username,

    [Parameter(Mandatory=$true, Position=7, HelpMessage="Specifies a password with which to authenticate to a MongoDB database that uses authentication.")]
    [string]$Password
)

$files = Get-ChildItem $Path | select Name, Extension, Directory;

Write-Host "";
Write-Host "Starting Update Imports..." -foregroundcolor "cyan";

ForEach($file in $files) {
    if($file.Extension -eq ".json") {

        $fileName = $file.Name;
        $fileDirectory = $file.Directory;
        $filePath = "$fileDirectory\$fileName";
        $errorOccured = $FALSE;

        Try {
            for ($i = 1; $i -le 100; $i++)
            {
                write-progress -activity "Updating $fileName" -status "$i% Complete:" -percentcomplete $i;
                Start-Sleep -Milliseconds 10;
            }

            mongoimport -h $HostUrl --port $Port -d $Database -c $Collection --upsert --upsertFields $UpsertKey -u $Username -p $Password --type json --file $filePath;
        }
        Catch {
            $errorOccured = $TRUE;
        }

        if($errorOccured) {
            Write-Host $fileName, "       [ ERROR ]" -foregroundcolor "red";
        }
        else {
            Write-Host $fileName, "       [ UPDATED ]" -foregroundcolor "green";
        }
    }
}
