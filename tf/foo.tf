resource "aws_security_group" "pr-test" {
    vpc_id = aws_vpc.vpc-a.id
    
    egress {
        from_port = 0
        to_port = 0
        protocol = -1
        cidr_blocks = ["0.0.0.0/0"]
    }    
    ingress {
        from_port = 0
        to_port = 0
        protocol = "-1"        
        cidr_blocks = ["0.0.0.0/0"]
    }    
}

