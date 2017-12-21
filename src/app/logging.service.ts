export class LoggingService{
    LogStatusChange(status: string){
        console.log('server status changed, new status: ' + status)
    }
}